<script>
  import { Router, Route } from "svelte-routing";
  import LandingPage from "./pages/LandingPage.svelte";
</script>

<Router>
  <Route path="/" component={LandingPage} />
</Router>
