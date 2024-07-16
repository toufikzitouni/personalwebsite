<script>
  export let thumbnail = "";
  export let startDate = "";
  export let endDate = "";
  export let title = "";
  export let company = "";
  export let description = "";
  export let tags = [];
  export let url = "";
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="rounded-lg hover:bg-slate-500 hover:bg-opacity-10 py-4 xl:p-4 xl:mr-4"
>
  <div class={`flex xl:flex-row flex-col xl:space-x-10`}>
    <div class={`h-6 flex items-center w-40 ${thumbnail ? "h-64" : "h-6"}`}>
      {#if thumbnail}
        <img
          src={thumbnail}
          alt="Thumbnail"
          class="h-64 w-40 object-cover rounded-xl mb-4 xl:mb-0"
        />
      {:else}
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
      {/if}
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
