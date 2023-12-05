import PropTypes from 'prop-types'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({isLogin}) => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-success" onClick={() => {
      isLogin.current = false
      logout({ logoutParams: { returnTo: window.location.origin } })}
    }>
      Log Out
    </button>
  );
};

LogoutButton.propTypes = {
  isLogin: PropTypes.object.isRequired
}

export default LogoutButton;