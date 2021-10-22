import { ReportHandler } from 'web-vitals';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line no-void
    void import('web-vitals').then(
      // eslint-disable-next-line promise/always-return
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }
    );
  }
};

export default reportWebVitals;
