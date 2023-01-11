import c7 from '../icons/cloud/c7.png';
import c12 from '../icons/cloud/c12.png';
import c18 from '../icons/cloud/c18.png';
import c22 from '../icons/cloud/c22.png';
import c23 from '../icons/cloud/c23.png';
import c35 from '../icons/cloud/c35.png';
import m1 from '../icons/moon/m1.png';
import m10 from '../icons/moon/m10.png';
import m14 from '../icons/moon/m14.png';
import m31 from '../icons/moon/m31.png';
import m15 from '../icons/moon/m15.png';
import m21 from '../icons/moon/m21.png';
import m40 from '../icons/moon/m40.png';
import m20 from '../icons/moon/m20.png';
import m202 from '../icons/moon/m202.png';
import s26 from '../icons/sun/s26.png';
import s27 from '../icons/sun/s27.png';







export const Icon_setter = (icon) => {
    let date = new Date()
    let hours = date.getHours();
    let timeDivider;
    if (hours < 19 && hours > 5) {
        timeDivider = "d";
    } else {
        timeDivider = "n"
    }
    let src;
    if (icon === "01d" || icon === "01n") {

        if (timeDivider === "d") {
            return s26

        } else {
            return m10
        }
    } else if (icon === "02d" || icon === "02n") {

        if (timeDivider === "d") {
            return s27
        } else {
            return m31
        }

    } else if (icon === "03d" || icon === "03n") {
        if (timeDivider === "d") {
            return c35
        } else {
            return m15
        }

    } else if (icon === "04d" || icon === "04n") {
        if (timeDivider === "d") {
            return c35

        } else {
            return m14
        }

    } else if (icon === "09d" || icon === "09n") {
        if (timeDivider === "d") {
            return c7
        } else {
            return m1
        }

    } else if (icon === "10d" || icon === "10n") {
        if (timeDivider === "d") {
            return c22
        } else {
            return m21
        }

    } else if (icon === "11d" || icon === "11n") {
        if (timeDivider === "d") {
            return c12
        } else {
            return m20
        }

    } else if (icon === "13d" || icon === "13n") {
        if (timeDivider === "d") {
            return c23
        } else {
            return m40
        }

    } else if (icon === "50d" || icon === "50n") {
        if (timeDivider === "d") {
            return c18
        } else {
            return m202
        }

    }
    console.log(src);
}