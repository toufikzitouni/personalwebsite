<script>
  import ExperienceComponent from "../components/ExperienceComponent.svelte";
  import BasePage from "./BasePage.svelte";
  import infoData from "../values/info.json";
  import HobbyComponent from "../components/HobbyComponent.svelte";
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
          <span class="font-poppins font-light text-sm text-slate-400 pt-4"
            >I build awesome mobile apps and also <br /> experienced in SaaS development</span
          >
        </div>
        <div class="flex flex-col items-start justify-start pt-24 space-y-4">
          <button
            class="font-poppins font-semibold text-sm tracking-wide text-slate-500 hover:text-slate-300"
          >
            <div></div>
            <span>Experience</span>
          </button>
          <button
            class="font-poppins font-semibold text-sm tracking-wide text-slate-500 hover:text-slate-300"
          >
            <div></div>
            <span>Projects</span>
          </button>
          <button
            class="font-poppins font-semibold text-sm tracking-wide text-slate-500 hover:text-slate-300"
          >
            <div></div>
            <span>Hobbies</span>
          </button>
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
            ><path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path></svg
          >
        </button>
        <button></button>
      </div>
    </div>
    <div class="flex flex-col flex-1 overflow-y-auto py-28 space-y-10">
      <h1
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
    </div>
  </div>
</BasePage>
