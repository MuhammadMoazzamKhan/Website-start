import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSAnimation = () => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
};

export default AOSAnimation;