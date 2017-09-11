export default {
  priority: 2,
  children: {
    attrs: {
      animator: 'velocity',
      transition: {
        duration: 250,
        effect: { opacity: 1 }
      },
      transitionIn: {
        duration: 250,
        effect: { opacity: [1, 0] }
      },
      transitionOut: {
        duration: 250,
        effect: { opacity: 0 }
      },
      lxlAnimation: {
        effect: {
          opacity: [1, 0]
        },
        duration: 0,
        rate: 25
      }
    }
  },
  registrant: {
    'affinity-engine': {
      'animator': {
        path: 'service:affinity-engine/animator-velocity'
      }
    }
  }
};
