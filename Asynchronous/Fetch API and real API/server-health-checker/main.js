//server health checker
//report how apis are working
//find the fastest api
//make the call to the fastest api
function fakeAPi(name, delay, fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(name);
      } else {
        resolve(name);
      }
    }, delay);
  });
}

const indserver = pingRequest("users-ind", 1000);
const uSserver = pingRequest("users-us", 1000, true);
const europeServer = pingRequest("request-europe", 2000);

function checkServerHealth() {
  const healthCheckup = Promise.allSettled([indserver, uSserver, europeServer]);
  const fastestServer = Promise.any([indserver, uSserver, europeServer]);

  healthCheckup
    .then((result) => {
      console.log("===Server Health===");
      const status = result.map((item) => ({
        name: item.value ?? item.reason,
        status: item.status === "fulfilled" ? "up" : "down",
      }));
    })
    .then(fastestServer)
    .then((result) => {
      console.log("fastest server is - ", result);

      if (result === "request-ind") {
        sendRequest(indserver, "https:/fetchuser//1");
      }
    });
}
