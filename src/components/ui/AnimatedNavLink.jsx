/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlipLink from './FlipLink';
const AnimatedNavLink = ({ to, children }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <motion.span
                    className={`font-medium text-sm ${isActive ? "[color: #2563eb] [border-bottom-color: #2563eb]  font-medium" : ""
                        }`}
                // animate={{ color: isActive ? "#2563eb" : "", borderBottomColor: isActive ? "#2563eb" : "" }} // Blue and gray in Tailwind
                // transition={{ duration: 2 }}
                >
                    <FlipLink>{children}</FlipLink>
                </motion.span>
            )}
        </NavLink>
    )
}




// px - 4 py - 8 text - [#0166B1] border - b - 2 border - b - [#0166B1]
export default AnimatedNavLink