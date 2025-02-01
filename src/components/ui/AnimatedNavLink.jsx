/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedNavLink = ({ to, children }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <motion.span
                    className={`px-4 py-8 font-medium text-sm ${isActive ? "[color: #2563eb] [border-bottom-color: #2563eb] border-b-2 font-medium" : ""
                        }`}
                    animate={{ color: isActive ? "#2563eb" : "", borderBottomColor: isActive ? "#2563eb" : "" }} // Blue and gray in Tailwind
                    transition={{ duration: 2 }}
                >
                    {children}
                </motion.span>
            )}
        </NavLink>
    )
}

// px - 4 py - 8 text - [#0166B1] border - b - 2 border - b - [#0166B1]
export default AnimatedNavLink