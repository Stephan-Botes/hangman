import React from 'react'

// Figure component that will be drawn as the error number increases
const Figure = ({wrongLetters}) => {

    // Variable that measures the amount of wrong letters from the props
    const errors = wrongLetters.length

    // Conditions for each body part to be displayed
    return (
        <svg height="250" width="200" className="figure-container">

            {/* Stand */}
            {errors > 0 &&
            <line x1="20" y1="230" x2="100" y2="230"/>
            }

            {/* Rod */}
            {errors > 1 &&
            <line x1="60" y1="20" x2="60" y2="230"/>
            }

            {/* Beam */}
            {errors > 2 &&
            <line x1="60" y1="20" x2="140" y2="20"/>
            }

            {/* Rope */}
            {errors > 3 &&
            <line x1="140" y1="20" x2="140" y2="50"/>
            }

            {/* Head */}
            {errors > 4 &&
            <circle cx="140" cy="70" r="20"/>
            }

            {/* Body */}
            {errors > 5 &&
            <line x1="140" y1="90" x2="140" y2="150"/>
            }

            {/* Arms */}
            {errors > 6 &&
            <line x1="140" y1="120" x2="120" y2="100"/>
            }
            {errors > 7 &&
            <line x1="140" y1="120" x2="160" y2="100"/>
            }

            {/* Legs */}
            {errors > 8 &&
            <line x1="140" y1="150" x2="120" y2="180"/>
            }
            {errors > 9 &&
            <line x1="140" y1="150" x2="160" y2="180"/>
            }
        </svg>
    )
}

export default Figure
