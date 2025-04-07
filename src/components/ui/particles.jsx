"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesJS = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      // await loadSlim(engine);
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -100,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },
          onHover: {
            enable: false,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: false,
          },
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 250,
            duration: 2,
            mix: false,
            opacity: 0,
            size: 0,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      particles: {
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              delay: 0,
              decay: 0,
              sync: true,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              delay: 0,
              decay: 0,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              delay: 0,
              decay: 0,
              sync: true,
            },
          },
        },
        groups: {},
        move: {
          angle: {
            offset: 45,
            value: 0,
          }, // Set the desired angle for bottom-right movement
          direction: "bottom-right", // Set to "bottom-right" to move particles in that direction
          enable: true,
          straight: true,
          outModes: {
            default: "out",
          },
          speed: 0.2,
        },
        number: {
          density: {
            enable: false,
            width: 1920,
            height: 1080,
          },
          limit: 0,
          value: 175,
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.5,
          },
          random: {
            enable: true,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: {
            min: 0.5,
            max: 1.1,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
            minimumValue: 0,
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 3,
            },
            rate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            sync: false,
          },
          duration: {
            random: {
              enable: false,
              minimumValue: 0.0001,
            },
            value: 0,
            sync: false,
          },
        },
        rotate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: "#ffffff",
          },
          consent: false,
          distance: 150,
          enable: false,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
export default ParticlesJS;
