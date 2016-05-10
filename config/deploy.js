module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'acroyoga-sandiego',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
