import Particles from "react-tsparticles";
import particlesConfig from "./config/particles.json";
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react";
import { chakra } from "@chakra-ui/react";
function ParticleBackground() {
	const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
	return (
        <div>
            <Particles
			params={particlesConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
        </div>
	);
}
export default ParticleBackground;