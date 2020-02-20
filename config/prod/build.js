'use strict'

process.env.NODE_ENV = 'production'

const { say } = require('cfonts')
const chalk = require('chalk')
const del = require('del')
const webpack = require('webpack')

const main = require('./webpack.main.config')
const renderer = require('./webpack.renderer.config')

const errorLog = chalk.bgRed.white(' ERROR ') + ' '
const okayLog = chalk.bgBlue.white(' OKAY ') + ' '
const isCI = process.env.CI || false

const Multispinner = require('multispinner')

build()

function build() {
  greeting()

  del.sync(['dist/electron/*', '!.gitkeep'])

  const tasks = ['main', 'renderer']
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process',
  })

  let results = ''

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`\n\n${results}`) // eslint-disable-line no-console
    console.log(
      `${okayLog}take it away ${chalk.yellow('`electron-builder`')}\n`,
    ) // eslint-disable-line no-console
    process.exit()
  })

  pack(main)
    .then(result => {
      results += result + '\n\n'
      m.success('main')
    })
    .catch(err => {
      m.error('main')
      console.log(`\n  ${errorLog}failed to build main process`) // eslint-disable-line no-console
      console.error(`\n${err}\n`) // eslint-disable-line no-console
      process.exit(1)
    })

  pack(renderer)
    .then(result => {
      results += result + '\n\n'
      m.success('renderer')
    })
    .catch(err => {
      m.error('renderer')
      console.log(`\n  ${errorLog}failed to build renderer process`) // eslint-disable-line no-console
      console.error(`\n${err}\n`) // eslint-disable-line no-console
      process.exit(1)
    })
}

function pack(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err)
      else if (stats.hasErrors()) {
        let err = ''

        stats
          .toString({
            chunks: false,
            colors: true,
          })
          .split(/\r?\n/)
          .forEach(line => {
            err += `    ${line}\n`
          })

        reject(err)
      } else {
        resolve(
          stats.toString({
            chunks: false,
            colors: true,
          }),
        )
      }
    })
  })
}

function greeting() {
  const cols = process.stdout.columns
  let text = ''

  if (cols > 85) text = 'lets-build'
  else if (cols > 60) text = 'lets-|build'
  else text = false

  if (text && !isCI) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false,
    })
  } else console.log(chalk.yellow.bold('\n  lets-build')) // eslint-disable-line no-console
  console.log() // eslint-disable-line no-console
}
