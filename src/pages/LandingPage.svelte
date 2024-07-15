<script>
  import ExperienceComponent from "../components/ExperienceComponent.svelte";
  import BasePage from "./BasePage.svelte";
  import infoData from "../values/info.json";
  import HobbyComponent from "../components/HobbyComponent.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let experienceSection, projectsSection, hobbiesSection;
  let currentSection = writable("");

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  onMount(() => {
    const sections = [
      { id: "experience", element: experienceSection },
      { id: "projects", element: projectsSection },
      { id: "hobbies", element: hobbiesSection },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  });
</script>

<BasePage>
  <div class="h-full w-3/4 flex overflow-hidden">
    <div class="flex flex-col flex-1 justify-between py-28">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col space-y-2">
          <span
            class="font-poppins text-slate-200 text-5xl font-bold tracking-tight"
            >Toufik Zitouni</span
          >
          <span class="font-poppins text-slate-200 text-lg tracking-wide"
            >Senior Fullstack Engineer</span
          >
          <span class="font-poppins font-light text-sm text-slate-400 pt-4">
            I build awesome mobile apps and also <br /> experienced in SaaS development
          </span>
        </div>
        <div class="flex flex-col items-start justify-start pt-24 space-y-4">
          <button
            class={`font-poppins font-semibold text-sm tracking-wide ${$currentSection === "experience" ? "text-slate-300" : "text-slate-500 hover:text-slate-300"}`}
            on:click={() => scrollToSection("experience")}
          >
            <span>Experience</span>
          </button>
          <button
            class={`font-poppins font-semibold text-sm tracking-wide ${$currentSection === "projects" ? "text-slate-300" : "text-slate-500 hover:text-slate-300"}`}
            on:click={() => scrollToSection("projects")}
          >
            <span>Projects</span>
          </button>
          <button
            class={`font-poppins font-semibold text-sm tracking-wide ${$currentSection === "hobbies" ? "text-slate-300" : "text-slate-500 hover:text-slate-300"}`}
            on:click={() => scrollToSection("hobbies")}
          >
            <span>Hobbies</span>
          </button>
          <div class="h-8"></div>
          <a
            href="./assets/files/document.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 font-poppins font-semibold text-sm tracking-wide text-slate-500 hover:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div class="flex items-start">
        <button class="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </button>
        <button></button>
      </div>
    </div>
    <div class="flex flex-col flex-1 overflow-y-auto py-28 space-y-10">
      <h1
        id="experience"
        bind:this={experienceSection}
        class="font-poppins font-light p-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
      >
        Experience
      </h1>
      {#each infoData.experience as experience}
        <ExperienceComponent
          startDate={experience.startDate}
          endDate={experience.endDate}
          title={experience.title}
          company={experience.company}
          description={experience.description}
          tags={experience.tags}
          url={experience.url}
        />
      {/each}
      <h1
        id="projects"
        bind:this={projectsSection}
        class="font-poppins font-light p-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
      >
        Projects
      </h1>
      {#each infoData.projects as project}
        <ExperienceComponent
          thumbnail={project.thumbnail}
          title={project.title}
          company={project.company}
          description={project.description}
          tags={project.tags}
          url={project.url}
        />
      {/each}
      <h1
        id="hobbies"
        bind:this={hobbiesSection}
        class="font-poppins font-light p-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
      >
        Hobbies
      </h1>
      {#each infoData.hobbies as hobby}
        <HobbyComponent
          video={hobby.video}
          title={hobby.title}
          description={hobby.description}
        />
      {/each}

      <p
        class="font-poppins font-light text-xs text-slate-400 tracking-wide italic"
      >
        Design inspired from <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-200">Brittany Chiang</a
        >'s site and is implemented using Svelte and Tailwind
      </p>
    </div>
  </div>
</BasePage>
