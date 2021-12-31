<template>
  <div :class="$style.wrapper" ref="wrapper">
    <div
      :class="$style.timeline"
      :style="{
        left: circleReferencePosition.left,
        right: circleReferencePosition.left,
        top: circleReferencePosition.top,
        bottom: circleReferencePosition.bottom,
      }"
    />
    <div
      :style="{ width: `calc(100% / ${dates.length}` }"
      :class="$style.dateWrapper"
      @mouseenter="() => onMouseEnter(index)"
      @mouseleave="() => onMouseLeave(index)"
      v-for="(date, index) in dates"
      :key="date"
    >
      <div :class="$style.work">
        <div :class="$style.workLabel">
          {{ items[date] && items[date].work && items[date].work.label }}
        </div>
        <PinUpIcon
          v-if="items[date] && items[date].work"
          :class="[$style.pinIcon, $style.workPinIcon]"
        />
        <div
          v-if="items[date] && items[date].work"
          :class="[$style.pinLine, $style.workPinLine]"
        />
        <div ref="descriptions" :class="$style.descriptionWrapper" Wrapper>
          <div
            :class="$style.description"
            v-html="
              items[date] && items[date].work && items[date].work.description
            "
          ></div>
        </div>
      </div>
      <div :class="$style.bottomWrapper">
        <div :class="$style.middle">
          <div
            :class="$style.circle"
            :style="{ border: `4px solid ${getColor()}` }"
            ref="circles"
          />
          <span :class="$style.date">{{ date }}</span>
          <div
            :style="{
              height: `${(index + 1) * ratio}px`,
            }"
          >
            <div
              v-if="items[date] && items[date].school"
              :class="$style.pinLine"
            />
          </div>
        </div>
        <div :class="$style.school">
          <PinIcon
            v-if="items[date] && items[date].school"
            :class="$style.pinIcon"
          />
          <div :class="$style.schoolLabel">
            {{ items[date] && items[date].school && items[date].school.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PinIcon from '@assets/images/pin'
import PinUpIcon from '@assets/images/pinUp'

let index = 0

export default {
  components: {
    PinIcon,
    PinUpIcon,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: ['#04A6AC', '#545563', '#FFFFFF'],
    }
  },
  methods: {
    onMouseLeave(index) {
      const element = this.$refs.descriptions[index]
      element.style.animation = null
      element.offsetHeight

      if (
        element.getBoundingClientRect().right >
        this.$refs.wrapper.getBoundingClientRect().right
      ) {
        element.style.animation = 'leaveLeft 0.8s ease forwards'
        return
      }

      element.style.animation = 'leaveRight 0.8s ease forwards'
    },
    onMouseEnter(index) {
      const element = this.$refs.descriptions[index]
      element.style.animation = null
      element.offsetHeight

      if (
        element.getBoundingClientRect().right >
        this.$refs.wrapper.getBoundingClientRect().right
      ) {
        element.style.animation = 'enterLeft 0.8s ease forwards'
        element.style.alignItems = 'flex-end'
        return
      }

      element.style.animation = 'enterRight 0.8s ease forwards'
    },
    getColor() {
      if (index > this.colors.length - 1) {
        index = 0
      }

      const result = this.colors[index]
      index = index + 1

      return result
    },
  },
  computed: {
    ratio() {
      return (10 / this.dates.length) * 15
    },
    circleReferencePosition() {
      if (!this.$refs.circles || !this.$refs.circles[0]) {
        return { left: 0, bottom: 0 }
      }

      const firstElement = this.$refs.circles[0]
      const lastElement = this.$refs.circles[this.$refs.circles.length - 1]
      const size = firstElement.offsetHeight
      const wrapperHeight = this.$refs.wrapper.offsetHeight
      const bottom = wrapperHeight - firstElement.offsetTop

      return {
        left: `${firstElement.offsetLeft + size / 2}px`,
        bottom: `${bottom - size / 2}px`,
        top: `${lastElement.offsetTop + size / 2}px`,
      }
    },
    dates() {
      return Object.keys(this.items)
        .map(Number)
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  display: inline-flex;
  position: relative;
}

.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
}

.descriptionWrapper {
  opacity: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.8s ease, opacity 0.4s linear;
  position: absolute;
  font-size: 0.9rem;
  width: 500px;
  padding: 1.5rem;
  padding-top: 0;
  left: calc(50% + 0px);
  top: 65px;
  z-index: 100;
  transform: translateX(0);
}

.middle {
  width: 100%;
}

.dateWrapper:hover {
  z-index: 1000;
  .descriptionWrapper {
    opacity: 1;
  }
  .workPinLine,
  .workPinIcon {
    transition: all 0.8s ease-in-out;
  }
  .workPinLine {
    background: rgba(white, 0.6);
  }
  .workPinIcon {
    fill: rgba(white, 0.6);
  }
}

.pinLine {
  width: 1px;
  background: #3e4050;
  height: 100%;
  z-index: 2;
  position: relative;
}

.workPinLine {
  min-height: 3rem;
}

.dateWrapper {
  display: inline-flex;
  z-index: 3;
  align-items: center;
  flex-direction: column;
}

.date {
  display: block;
  z-index: 5;
  padding-top: 10px;
  margin-bottom: 0.7rem;
}

.school {
  height: 100px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.middle {
  align-items: center;
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.pinIcon {
  fill: rgba(white, 0.1);
  height: auto;
  width: 25px;
  flex-shrink: 0;
}

.circle {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: #292b3c;
  z-index: 2;
}

.workLabel {
  cursor: default;
  margin-bottom: 1rem;
}

.schoolLabel {
  margin-top: 1rem;
}

.timeline {
  position: absolute;
  background: repeating-linear-gradient(
      100deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 10px,
      rgba(#292b3c, 1) 10px,
      rgba(#292b3c, 1) 20px
    ),
    linear-gradient(
      to top left,
      rgba(black, 0) 0%,
      rgba(black, 0) calc(50% - 1px),
      rgba(white, 0.3) 50%,
      rgba(black, 0) calc(50% + 1px),
      rgba(black, 0) 100%
    );
  transform-origin: top left;
}
</style>

<style lang="scss">
@keyframes enterLeft {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes enterRight {
  0% {
    transform: translateX(-35px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes leaveLeft {
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes leaveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-35px);
  }
}
</style>
