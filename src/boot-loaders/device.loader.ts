import * as Device from 'expo-device';

const DeviceLoader = () => ({
  boot: (App) => {
    App.uniqueIdentifier = Device.osInternalBuildId;
  }
});

export default DeviceLoader;
