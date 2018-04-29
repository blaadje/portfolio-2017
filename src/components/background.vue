<script>
var THREE = require('three/three.min.js')
var TWEEN = require('@tweenjs/tween.js')
var TrackballControls = require('three-trackballcontrols')

import _ from 'underscore'
export default {
  props: {
    speed: { type: Number }
  },
  data () {
    return {
      isChanged: false
    }
  },
  methods: {
    changePage (e, camera, material) {
      if (e.deltaY < 0 || this.isChanged) {
        return
      }

      e.preventDefault()
      e.stopPropagation()

      new TWEEN.Tween(camera.position)
      .to({
        x: 23,
        y: 324,
        z: -100}, 1000)
      .easing(TWEEN.Easing.Sinusoidal.InOut)
      .start()
      new TWEEN.Tween(material)
      .to({
        size: 10}, 1000)
      .easing(TWEEN.Easing.Sinusoidal.InOut)
      .start()

      this.isChanged = true

      setTimeout(() => {
        this.$router.push({ name: 'page2', params: { animate: true } })
      }, 1000)
    }
  },
  mounted () {
    var container
    var camera, scene, renderer, particles, lines, mouselines, controls, material, line
    var plane, frustum, cameraViewProjectionMatrix

    var visibleParticles = []
    var visibleLines = []

    var DISTANCE = 500
    var RADIUS = 10
    var AMOUNT = 200
    var ZDEPTH = 0.83
    var THICKNESS = 2
    var SPEED = this.speed

    var mouse = {
      x: 0,
      y: 0,
      particle: null,
      updateParticlePosition: function () {
        var x = this.x / window.innerWidth * 2 - 1
        var y = -this.y / window.innerHeight * 2 + 1

        var vector = new THREE.Vector3(x, y, 0.5).unproject(camera)
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize())
        var intersects = raycaster.intersectObject(plane)

        if (!intersects.length) {
          this.particle.visible = false
          return
        }
        var position = intersects[0].point
        this.particle.position.copy(position)
      }
    }

    init()
    animate()

    function init () {
      container = document.querySelector('#container')

      camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 100, 10000)
      camera.position.z = 1000
      new TWEEN.Tween(camera.position)
      .to({
        x: 0,
        y: 0,
        z: 800}, 2000)
      .easing(TWEEN.Easing.Bounce.InOut)
      .start()

      frustum = new THREE.Frustum()
      cameraViewProjectionMatrix = new THREE.Matrix4()

      controls = new TrackballControls(camera)
      controls.rotateSpeed = 1.0
      controls.zoomSpeed = 1.2
      controls.panSpeed = 0.8
      controls.noZoom = true
      controls.noPan = true
      controls.staticMoving = false
      controls.dynamicDampingFactor = 0.3

      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x033d5e, 0.0009)

      plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(5000, 5000, 8, 8),
        new THREE.MeshBasicMaterial({
          color: 0xFF0000,
          opacity: 0.25,
          transparent: true
        })
      )
      plane.visible = false
      scene.add(plane)

      lines = new THREE.Group({ antialias: true })
      scene.add(lines)

      mouselines = new THREE.Group()
      scene.add(mouselines)

      particles = new THREE.Geometry()

      for (var i = 0; i < AMOUNT; i++) {
        var x = Math.random() * 2000 - 1000
        var y = Math.random() * 2000 - 1000
        var z = Math.random() * 2000 - 1000

        var particle = new THREE.Vector3(x, y, z)
        particle.velocity = new THREE.Vector3(-0.5 + Math.random(), -0.5 + Math.random(), -0.5 + Math.random()).multiplyScalar(SPEED)
        particle.nearParticles = []
        particles.vertices.push(particle)
      }

      var image = document.createElement('img')
      image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA6gSS+UwQxYBYrZaUV8eBNZqYOQAAAJBJREFUKM+Fk1kOAyEMQ+Owzp77n7ZCbRHTDvH7fRIKiS0dTaEgRpSQVH7JFdZBzXe7wG5gGaRu9sem3a72wPr1wR7Z3/awCUezGTONNn+1KVVEMddQSeaQJHg6SPF0EXgaEj0diSaPk9HIx8hayFLJSchBvTh84rg7YSJRJEHmNWjkC4O8eonGCp6tgudYwRdS1iqsCVRl3AAAAABJRU5ErkJggg=='
      var sprite = new THREE.Texture(image)
      image.onload = function () {
        sprite.needsUpdate = true
      }

      material = new THREE.PointCloudMaterial({
        size: RADIUS,
        map: sprite,
        color: 0xFFFFFF,
        depthTest: false,
        transparent: true
      })

      var particleSystem = new THREE.PointCloud(
        particles,
        material
      )

      particleSystem.sortParticles = true
      scene.add(particleSystem)

      var mouseMaterial = new THREE.SpriteMaterial({
        map: sprite,
        fog: true,
        transparent: true,
        opacity: 0.25
      })

      mouse.particle = new THREE.Sprite(mouseMaterial)
      mouse.particle.scale.x = mouse.particle.scale.y = 20
      mouse.particle.nearParticles = []
      scene.add(mouse.particle)

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        clearAlpha: 1
      })
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.sortObjects = true
      container.appendChild(renderer.domElement)

      updateFrustum()
      window.addEventListener('mousemove', onDocumentMouseMove, false)
      window.addEventListener('resize', onWindowResize, false)
    }

    function onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function onDocumentMouseMove (event) {
      mouse.x = event.clientX
      mouse.y = event.clientY
      camera.x = event.clientX
      camera.y = event.clientY
      mouse.updateParticlePosition()
    }

    function animate () {
      requestAnimationFrame(animate)
      render()
      TWEEN.update()
    }

    function render () {
      controls.update()
      particlesAnimate()
      particlesDistance()
      linesUpdate()
      mouseLinesUpdate()
      TWEEN.update()
      renderer.render(scene, camera)
    }

    function particlesAnimate () {
      for (var i = 0, il = particles.vertices.length; i < il; i++) {
        var p = particles.vertices[i]

        p.add(p.velocity)

        if (p.x - RADIUS > 1000 || p.x + RADIUS < -1000) p.velocity.x = -p.velocity.x
        if (p.y - RADIUS > 1000 || p.y + RADIUS < -1000) p.velocity.y = -p.velocity.y
        if (p.z - RADIUS > 1000 || p.z + RADIUS < -1000) p.velocity.z = -p.velocity.z
      }
      particles.verticesNeedUpdate = true
    }

    function particlesDistance () {
      visibleParticles = _.filter(particles.vertices, function (p) {
        return frustum.containsPoint(p)
      })
      visibleLines = _.filter(lines.children, function (l) {
        return frustum.intersectsObject(l)
      })

      for (var i = 0; i < visibleParticles.length; i++) {
        var p = visibleParticles[i]

        distanceWithMouse(p)

        for (var j = i + 1; j < visibleParticles.length; j++) {
          var p2 = particles.vertices[j]
          distanceParticles(p, p2)
        }
      }
    }

    function linesUpdate () {
      for (var i = 0; i < visibleLines.length; i++) {
        var l = visibleLines[i]
        l.geometry.computeLineDistances()

        var dist = l.geometry.lineDistances[1]
        if (dist > DISTANCE) {
          lines.remove(l)
        } else {
          l.material.opacity = 1 - dist / DISTANCE
          l.geometry.verticesNeedUpdate = true
        }
      }
    }

    function mouseLinesUpdate () {
      for (var i = 0; i < mouselines.children.length; i++) {
        var l = mouselines.children[i]
        var p0 = toScreenXY(l.geometry.vertices[0])
        var p1 = toScreenXY(l.geometry.vertices[1])

        var dx = p0.x - p1.x
        var dy = p0.y - p1.y

        var dist2D = Math.sqrt(dx * dx + dy * dy)

        if (dist2D > DISTANCE || p0.z > ZDEPTH) {
          mouselines.remove(l)
        } else {
          l.material.opacity = 1 - Math.abs(p0.z - 0.5) / 0.5 / 2 - dist2D / DISTANCE
          l.geometry.verticesNeedUpdate = true
        }
      }
    }

    function updateFrustum () {
      camera.updateMatrixWorld()
      camera.matrixWorldInverse.getInverse(camera.matrixWorld)
      cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
      frustum.setFromMatrix(cameraViewProjectionMatrix)

      plane.lookAt(camera.position)
    }

    function distanceParticles (p1, p2) {
      var dist = p1.distanceTo(p2)

      var pos = p1.nearParticles.indexOf(p2)
      if (dist <= DISTANCE) {
        if (pos < 0) {
          p1.nearParticles.push(p2)
          createLine(p1, p2)
        }
      } else {
        if (pos >= 0) {
          p1.nearParticles.splice(pos, 1)
        }
      }
    }

    function distanceWithMouse (p) {
      var pxy = toScreenXY(p)
      var dx = mouse.x - pxy.x
      var dy = mouse.y - pxy.y

      var dist2D = Math.sqrt(dx * dx + dy * dy)

      var pos = mouse.particle.nearParticles.indexOf(p)

      if (dist2D <= DISTANCE && pxy.z <= ZDEPTH) {
        if (pos < 0) {
          mouse.particle.nearParticles.push(p)
          createMouseLine(p)
        }
      } else {
        if (pos >= 0) {
          mouse.particle.nearParticles.splice(pos, 1)
        }
      }
    }

    function createMouseLine (p) {
      var geometry = new THREE.Geometry()
      geometry.vertices.push(
        p,
        mouse.particle.position
      )

      var lineMaterial = new THREE.LineBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 1,
        depthTest: false,
        linewidth: THICKNESS,
        fog: false
      })

      line = new THREE.Line(geometry, lineMaterial)
      mouselines.add(line)
    }

    function createLine (p1, p2) {
      var geometry = new THREE.Geometry()
      geometry.vertices.push(
        p1,
        p2
      )

      var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x3f8490,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        linewidth: THICKNESS,
        fog: true
      })

      line = new THREE.Line(geometry, lineMaterial)
      lines.add(line)
      return line
    }

    function toScreenXY (position) {
      var pos = position.clone()
      pos.applyProjection(cameraViewProjectionMatrix)
      return { x: (pos.x + 1) * window.innerWidth / 2, y: (-pos.y + 1) * window.innerHeight / 2, z: pos.z }
    }

    document.addEventListener('wheel', event => this.changePage(event, camera, material))
    document.addEventListener('DOMMouseScroll', event => this.changePage(event, camera, material))
  },
  destroyed () {
    document.querySelector('#container canvas').remove
    document.removeEventListener('wheel', event => this.changePage())
    document.removeEventListener('DOMMouseScroll', event => this.changePage())
  }
}
</script>
<template>
  <div id="container" @scroll="() => console.log('test')">
  </div>
</template>
<style lang="sass">
canvas
  background: transparent
  position: fixed
  top: 0
  pointer-events: none
  z-index: 1
</style>

