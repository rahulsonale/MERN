//template  pattern
//steps =

class Autoservice {
  login() {
    this.Validite();
    this.processCredentials();
    this.createsession();
  }
}

class GoogleAuthService extends AuthService {
  processCredentials() {
    console.log("Implementations for credentials processing-google");
  }
}
class YahooEmailAuthService extends AuthService {
  processCredentials() {
    console.log("Implementations for credentulas processing-yahoo");
  }
}
const googleSerive = new GoogleAuthService();
googleSerive.login();
