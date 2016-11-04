export default {
  priority: 1,
  global: {
    animationLibrary: 'velocity',
    transition: {
      duration: 250,
      effect: { opacity: 1 }
    },
    transitionDuration: 200,
    transitionIn: {
      duration: 250,
      effect: { opacity: [1, 0] }
    },
    transitionOut: {
      duration: 250,
      effect: { opacity: 0 }
    },
    lxlTransition: {
      effect: {
        opacity: [1, 0]
      },
      rate: 25
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
