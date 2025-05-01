// Graph visualization configurations
export const graphConfig = {
  node: {
    relSize: 8,
    fontSize: 16,
    minFontSize: 8,
    radius: 8,
    minRadius: 4
  },
  link: {
    width: 1.5,
    hoverWidth: 3,
    arrowLength: 8,
    arrowPosition: 1
  },
  colors: {
    link: {
      light: '#999',
      dark: '#666'
    },
    nodeBorder: {
      light: '#00000033',
      dark: '#ffffff33'
    },
    labelBackground: {
      light: '#ffffff99',
      dark: '#1a1b1e99'
    },
    text: {
      light: '#000',
      dark: '#fff'
    }
  },
  physics: {
    cooldownTicks: 100,
    alphaDecay: 0.01,
    velocityDecay: 0.2,
    chargeStrength: -200
  }
};