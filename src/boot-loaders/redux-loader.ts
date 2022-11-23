const ReduxLoader = () => ({
  boot: (app) => {
    app.redux = {};
  }
});

export default ReduxLoader;
