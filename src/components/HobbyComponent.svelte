<script>
  export let video = "";
  export let title = "";
  export let description = "";

  console.log(video);
</script>

<div class="p-4 mr-4">
  <div class="flex space-x-10">
    <div class="flex items-start w-40 h-64">
      <video
        controls
        src={video}
        class="h-28 w-40 border-2 border-gray-300 rounded-lg shadow-lg"
      >
        <track kind="captions" />
      </video>
    </div>
    <div class="flex flex-col flex-1">
      <h3 class="font-poppins text-slate-100 mb-2">
        {title}
      </h3>
      <p class="font-poppins text-sm font-light text-slate-400">
        {description}
      </p>
    </div>
  </div>
</div>
