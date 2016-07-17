export default {
  priority: 1,
  globals: {
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
    tweenEffect: {
      opacity: {
        from: 0,
        to: 1
      }
    },
    tweenRate: 25
  },
  'affinity-engine': {
    'animator': {
      path: 'service:affinity-engine/animator-velocity',
      name: 'velocity'
    }
  }
};
