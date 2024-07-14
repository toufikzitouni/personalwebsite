<script>
  export let startDate = "2024";
  export let endDate = "present";
  export let title = "Senior Frontend Engineer, Accessibility";
  export let company = "Klaviyo";
  export let description =
    "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.";
  export let tags = ["JavaScript", "TypeScript", "React", "Storybook"];
  export let url = "https://www.google.com";
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="rounded-lg hover:bg-slate-500 hover:bg-opacity-10 p-4 mr-4"
>
  <div class="flex space-x-10">
    <div class="h-6 flex items-center w-40">
      <span
        class="font-poppins font-semibold text-xs tracking-wider text-slate-500 uppercase"
        >{startDate}</span
      >
      <div class="flex px-1">
        <div class="h-0.5 w-3 bg-slate-500"></div>
      </div>
      <span
        class="font-poppins font-semibold text-xs tracking-wider text-slate-500 uppercase"
        >{endDate}</span
      >
    </div>
    <div class="flex flex-col flex-1">
      <h3 class="font-poppins text-slate-100">
        {title}
      </h3>
      <h2
        class="font-poppins font-semibold text-sm text-teal-400 tracking-wider mb-2"
      >
        {company}
      </h2>
      <p class="font-poppins text-sm font-light text-slate-400">
        {description}
      </p>
      <ul class="mt-2 flex flex-wrap">
        {#each tags as tag}
          <li class="mr-1.5 mt-2">
            <div class="px-4 pt-1 py-2 bg-teal-700 bg-opacity-20 rounded-full">
              <span class="font-poppins text-xs text-teal-300 tracking-wide"
                >{tag}</span
              >
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</a>
