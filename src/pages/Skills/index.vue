<template>
  <div :class="$style.content">
    <Header />
    <Container>
      <h2>Skills</h2>
      <div :class="$style.grid">
        <div :class="$style.block">
          <h3 :class="$style.titleBlock">Front-end languages</h3>
          <Paper :class="$style.paper">
            <Gauge :class="$style.gauge" :items="skills.frontEnd" />
          </Paper>
        </div>
        <div :class="[$style.block, $style.preProcessors]">
          <h3 :class="$style.titleBlock">Pre-processors</h3>
          <Paper :class="$style.paper">
            <Gauge :class="$style.gauge" :items="skills.preProcessors" />
          </Paper>
        </div>
        <div :class="[$style.block, $style.backEnd]">
          <h3 :class="$style.titleBlock">Back-end languages</h3>
          <Paper :class="$style.paper">
            <Chart
              :data="{
                labels: backend.label,
                datasets: [
                  {
                    borderWidth: 2,
                    borderColor: 'rgb(1, 165, 171)',
                    pointBackgroundColor: 'rgb(1, 165, 171)',
                    backgroundColor: 'rgba(255,255,255, 0.2)',
                    data: backend.pourcentage,
                  },
                ],
              }"
            />
          </Paper>
        </div>
        <div :class="[$style.block, $style.frameworks]">
          <h3 :class="$style.titleBlock">Main frameworks</h3>
          <Paper :class="$style.paper">
            <div
              v-for="skill in skills.frameworks"
              :key="skill.label"
              :class="$style.frameworkItem"
            >
              <img :src="require(`@assets/images/${skill.src}`).default" />
              <span :class="$style.frameworkItemLabel">{{ skill.label }}</span>
            </div>
          </Paper>
        </div>
        <div :class="[$style.block, $style.designing]">
          <h3 :class="$style.titleBlock">Designing tools</h3>
          <Paper :class="$style.paper">
            <Gauge :class="$style.gauge" :items="skills.designingTool" />
          </Paper>
        </div>
        <div :class="[$style.block, $style.developping]">
          <h3 :class="$style.titleBlock">Developing tools</h3>
          <Paper :class="[$style.paper, $style.toolsWrapper]">
            <span
              v-for="tool in skills.tools"
              :key="tool"
              :class="$style.tool"
              >{{ tool }}</span
            >
          </Paper>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Header from '@components/header'
import arrows from '@components/arrows'
import SkillGraphIcon from '@assets/images/skillgraph'
import Container from '@components/container'
import Paper from './components/Paper'
import Gauge from './components/Gauge'
import Chart from './components/Chart'
import skills from './skills.yaml'

export default {
  components: { SkillGraphIcon, Header, Container, Paper, Gauge, Chart },
  mounted() {
    this.$store.dispatch('endPreload')
  },
  computed: {
    backend() {
      return skills.backend.reduce((acc, { pourcentage, label }) => {
        if (!acc.label && !acc.pourcentage) {
          return { label: [label], pourcentage: [pourcentage] }
        }

        return {
          label: [...acc.label, label],
          pourcentage: [...acc.pourcentage, pourcentage],
        }
      }, {})
    },
    skills: () => skills,
  },
}
</script>

<style lang="scss" module src="./style.scss"></style>
