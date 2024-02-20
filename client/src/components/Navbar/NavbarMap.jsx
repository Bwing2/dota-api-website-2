import PropTypes from "prop-types";

export default function Nav({ links }) {
  return (
    <div className="nav-container">
      <ul className="nav">
        {links.map((link, index) => (
          <li className="nav-item" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
};
