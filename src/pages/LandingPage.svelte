<script>
  import ExperienceComponent from "../components/ExperienceComponent.svelte";
  import BasePage from "./BasePage.svelte";
  import infoData from "../values/info.json";
  import HobbyComponent from "../components/HobbyComponent.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let isMenuOpen = false;
  let experienceSection, projectsSection, publicationsSection, hobbiesSection;
  let currentSection = writable("");

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  onMount(() => {
    const sections = [
      { id: "experience", element: experienceSection },
      { id: "projects", element: projectsSection },
      { id: "publications", element: publicationsSection },
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
  <div
    class="h-full w-full p-6 xl:p-0 xl:w-3/4 flex flex-col xl:flex-row overflow-y-auto xl:overflow-hidden"
  >
    <div class="flex-col flex-1 justify-between xl:py-28 hidden xl:flex">
      <div class="flex flex-col justify-between">
        <div class="flex space-x-4">
          <img
            src="./assets/images/me.jpg"
            alt="Me"
            class="h-40 w-28 object-cover rounded-lg border-2 border-teal-500"
          />
          <div class="flex flex-col space-y-2">
            <span
              class="font-poppins text-slate-200 text-5xl font-bold tracking-tight"
              >Toufik Zitouni</span
            >
            <span class="font-poppins text-slate-200 text-lg tracking-wide"
              >Senior Android Engineer</span
            >
            <span class="font-poppins font-light text-sm text-slate-400 pt-4">
              I build awesome mobile apps and also <br /> experienced in SaaS development
            </span>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start pt-24 space-y-4">
          <button
            class={`font-poppins font-semibold text-sm tracking-wide ${$currentSection === "experience" ? "text-slate-300" : "text-slate-500 hover:text-slate-300"}`}
            on:click={() => scrollToSection("experience")}
          >
            <span>Experience</span>
          </button>
          <button
            class={`font-poppins font-semibold text-sm tracking-wide ${$currentSection === "publications" ? "text-slate-300" : "text-slate-500 hover:text-slate-300"}`}
            on:click={() => scrollToSection("publications")}
          >
            <span>Publications</span>
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
      <div class="flex items-start space-x-8">
        <a
          href="https://github.com/toufikzitouni"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white"
        >
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
        </a>
        <a
          href="https://www.linkedin.com/in/toufik-zitouni-02a9a727/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
            aria-hidden="true"
            ><path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path></svg
          >
        </a>
      </div>
    </div>
    <div class=" xl:hidden mt-16 mb-4 flex items-center space-x-4">
      <a
        href="./assets/files/document.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-4 flex items-center space-x-2 font-poppins font-semibold text-sm tracking-wide text-slate-500 hover:text-slate-300"
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
      <a
        href="https://github.com/toufikzitouni"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-white"
      >
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
      </a>
      <a
        href="https://www.linkedin.com/in/toufik-zitouni-02a9a727/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
          aria-hidden="true"
          ><path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          ></path></svg
        >
      </a>
    </div>
    <div class="flex flex-col xl:flex-1 xl:overflow-y-auto xl:py-24 space-y-10">
      <h1
        id="experience"
        bind:this={experienceSection}
        class="font-poppins font-light py-4 pt-0 mr-0 xl:mr-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
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
        id="publications"
        bind:this={publicationsSection}
        class="font-poppins font-light py-4 pt-0 mr-0 xl:mr-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
      >
        Publications
      </h1>
      {#each infoData.publications as publication}
        <ExperienceComponent
          startDate={publication.startDate}
          title={publication.title}
          url={publication.url}
        />
      {/each}
      <h1
        id="projects"
        bind:this={projectsSection}
        class="font-poppins font-light py-4 mr-0 xl:mr-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
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
        class="font-poppins font-light py-4 mr-0 xl:mr-4 text-slate-400 text-xl tracking-wider border-b border-slate-400 border-opacity-40"
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
  <div
    class="fixed flex xl:hidden p-4 items-center justify-between inset-0 h-16 bg-slate-900 border-b border-slate-200 border-opacity-20"
  >
    <div class="flex items-center space-x-2">
      <img
        src="./assets/images/me.jpg"
        alt="Me"
        class="h-10 w-10 rounded-full border-2 border-teal-500"
      />
      <span
        class="font-poppins text-slate-200 text-2xl font-light tracking-tight"
        >Toufik Zitouni</span
      >
    </div>
    <div class="relative z-20">
      <button
        class={`rounded p-1 ${isMenuOpen ? "bg-slate-600" : "bg-slate-700 hover:bg-slate-600"} `}
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-5 h-5 text-white fill-current"
          viewBox="0 0 24 24"
          ><path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          /></svg
        >
      </button>
      <div
        class={`absolute h-32 w-32 bg-slate-700 right-0 top-10 flex flex-col items-start rounded-lg justify-center ${isMenuOpen ? "" : "hidden"}`}
      >
        <button
          class={`w-full text-start font-poppins font-light text-sm tracking-wide p-2 text-white ${$currentSection === "experience" ? "bg-slate-500" : "bg-slate-700 hover:bg-slate-600"}`}
          on:click={() => scrollToSection("experience")}
        >
          <span>Experience</span>
        </button>
        <button
          class={`w-full text-start font-poppins font-light text-sm tracking-wide p-2 text-white  ${$currentSection === "publications" ? "bg-slate-500" : "bg-slate-700 hover:bg-slate-600"}`}
          on:click={() => scrollToSection("publications")}
        >
          <span>Publications</span>
        </button>
        <button
          class={`w-full text-start font-poppins font-light text-sm tracking-wide p-2 text-white  ${$currentSection === "projects" ? "bg-slate-500" : "bg-slate-700 hover:bg-slate-600"}`}
          on:click={() => scrollToSection("projects")}
        >
          <span>Projects</span>
        </button>
        <button
          class={`w-full text-start font-poppins font-light text-sm tracking-wide p-2 text-white ${$currentSection === "hobbies" ? "bg-slate-500" : "bg-slate-700 hover:bg-slate-600"}`}
          on:click={() => scrollToSection("hobbies")}
        >
          <span>Hobbies</span>
        </button>
      </div>
    </div>
  </div>
</BasePage>
