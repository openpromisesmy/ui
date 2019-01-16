<template>
  <main class="about">
    <h1 class="title">About OpenPromises</h1>
    <div><h1 id="tagline">{{ msg }}</h1></div>
    <img id="logo" src="@/assets/logo.jpg">
    <div class="about-points">
      <el-card>
        <h2>The problem ?</h2>
        <p>The feedback loop for representative democracies is broken. Politicians gain support from citizens not just based on track records but also heavily based on promises that they make. The fulfilment of these promises are currently not tracked in a systematic way.</p>
      </el-card>

      <el-card>
        <h2>The solution ?</h2>
        <p>A resource and platform that empowers citizens with easy access to the track record of promises made and their fulfilment: OpenPromises.</p>
      </el-card>

      <el-card>
        <h2>What is OpenPromises ?</h2>
        <p>OpenPromises is a not for profit project that is centred around the tracking of promises made by representatives and people in power.</p>
      </el-card>

      <el-card>
        <h2>What do you mean by promises ?</h2>
        <p>Promises are plans of actions that can be carried out by people in office. It can be a one-off action or a policy change.</p>
      </el-card>

      <el-card>
        <h2>What is the end goal ?</h2>
        <p>Increase the level of accountability amongst representatives in the country while increasing level of engagement amongst citizens.</p>
      </el-card>

      <el-card>
        <h2>What are the objectives ?</h2>
        <p>Build a media resource and platform that can be used by journalists, media organisations, politicians and ordinary citizens, to push for more accountability amongst the country’s representatives</p>
        <p>Increase level of political awareness and engagement amongst ordinary citizens</p>
      </el-card>

      <el-card>
        <h2>Who are we funded by ?</h2>
        <p>Currently we have 44 USD/month funding from our community members that covers our current monthly expenses. For a year before we had crowdfunding, we also used some of our personal money to for expenses incurred by the website and its setting up. As it stands, we are 100% citizen-funded through Patreon. Decentralised funding means we cannot be easily influenced or corrupted.</p>
      </el-card>

      <el-card>
        <h2>What are the current expenses?</h2>
        <p>What are the current expenses?
          <ul>
            <li>Web hosting and domain (30.00 USD/month) - <b>already covered by crowdfunders</b></li>
            <li>Paid media subscriptions (10.34 USD/month) - <b>already covered by crowdfunders</b></li>
            <ul>
              <li>The Malaysian Insight monthly subscription (paid annually) - 3.10 USD</li>
              <li>Malaysia Kini monthly subscription (paid annually) - 4.14 USD</li>
              <li>The Edge monthly subscription (paid annually) - 3.10 USD</li>
            </ul>
          </ul>
        </p>
      </el-card>

      <el-card>
        <h2>What would we use funding for?</h2>
        <p>Tracking is a very time consuming process and a more developed backend system can cut down the time needed to process promises. Development of the website and tracking tools will be accelerated with proper funding. We also need funding to get access to paid media sources which will help us verify promises faster. Here is a list of the more immediate uses of funds:</p>
        <ul>
          <li>Full text search capabilities - 29 USD/month</li>
          <li>Security tools - 25 USD/month (there are certain security tools that we can use to ensure the platform is more secure against attacks)</li>
        </ul>
      </el-card>

      <el-card>
        <h2>How can people fund us?</h2>
        <p>Through our Patreon page at <a href="https://patreon.com/openpromisesmalaysia">https://patreon.com/openpromisesmalaysia</a></p>
      </el-card>

      <el-card>
        <h2>Deployment in other countries</h2>
        <p>What we are building behind the scenes is a platform that can be deployed for any country. If you are interested to bring this to your country, please <a href="https://facebook.com/openpromises.malaysia" target="_blank">message us on facebook</a></p>
      </el-card>

      <el-card>
        <h2>The Team</h2>
        <ul>
          <li>Nazreen Mohamad - Founder and Project Manager</li>
          <li>Chia Yen Gan - Campaign Manager</li>
          <li>Jing Yi Lim - Tracking Coordinator</li>
          <li>Han Jinn - Lead Tracker</li>
          <li>Umar Rasydan - Lead Developer</li>
          <li>Roxanne Low - Product Design</li>
        </ul>
        <p>None of us are affiliated with any political party. We are just ordinary citizens hoping to do our small part in improving our country’s democracy.</p>
      </el-card>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg:
        "Tech has the potential to make our democracies better. It's time we realise that."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center
}

.about-points {
    max-width: 600px;
    margin: 0 auto
}

.el-card {
  margin-bottom: 5px;
  text-align: left
}
</style>
