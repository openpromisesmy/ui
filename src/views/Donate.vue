<template>
  <div class="container">
    <template>
      <el-row>
        <el-col :md="12">
          <h1>Support us to track the issues you care about</h1>When you contribute to Open Promises, you support the sustainability of the project. Since the beginning, Open Promises has been independently holding those in power accountable. By contributing, you will help us retain our independence and invest in resources to provide more frequent promise updates.
          <p>Monthly Expenses - RM 180 / month</p>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <p>Full-Time Tracker and Tools - RM 2020 / month</p>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <h1>Who are we currently funded by?</h1>Currently, we are 100% citizen-funded through Patreon. Decentralised funding means we cannot be easily influenced or corrupted.
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <h1>What are our current expenses?</h1>
          <p>
            <ul>
              <li>Web hosting and domain (30.00 USD/month) - already covered by crowdfunders</li>
              <li>Paid media subscriptions (RM 62.00/month) - already covered by crowdfunders</li>
              <li>The Malaysian Insight monthly subscription (paid annually) - RM 12.00</li>
              <li>MalaysiaKini monthly subscription (paid annually) - RM 40.00</li>
              <li>The Edge monthly subscription (paid annually) - RM 12.00</li>
            </ul>
          </p>
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <h1>What would we use funding for?</h1>
          <p>
            Tracking promises is a time consuming process. Our team of trackers consists of volunteers - while we strive to ensure consistency, work and study commitments may mean delays in processing updates. By hiring a full-time tracker, we can
            <b>manage the tracking process quicker and increase the frequency of updates.</b>
          </p>
          <p>In addition, developing new website features and tracking tools will be accelerated with proper funding. We also need funding to get access to paid media sources which will help us verify promises faster. Here is a list of the uses of funds:</p>
          <ul>
            <li>Hiring a full-time tracker - RM 1,800 / month</li>
            <li>Full text search capabilities - 29 USD / month</li>
            <li>Security tools - 25 USD / month (there are certain security tools that we can use to ensure the platform is more secure against attacks)</li>
          </ul>
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <h1>How can you fund us?</h1>
          <p>We accept contributions via bank transfer, credit/debit cards and PayPal. You may contribute monthly and join as a member, or you may also opt to make a one-off contribution.</p>
          <p>By contributing monthly, you will receive exclusive benefits (see schedule below). Who doesn’t like goodies?</p>
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <h1>Benefits of contributing as a member</h1>
            <el-table
            :data="benefitData"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="Member Type"
              width="180">
            </el-table-column>
            <el-table-column
              prop="contribution"
              label="Contribution"
              width="180">
            </el-table-column>
            <el-table-column
              prop="benefit1"
              label="1-hour call with Open Promises core team, regular updates">
            </el-table-column>
            <el-table-column
              prop="benefit2"
              label="Open Promises T-Shirt">
            </el-table-column>
          </el-table>
          <hr />
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  name: "Donate",
  data() {
    return {
        benefitData: [{
          name: 'Councillor',
          contribution: "RM 10/Month",
          benefit1: 'Included',
          benefit2: 'Included'
        },{
          name: 'Assemblyman',
          contribution: "RM 30/Month",
          benefit1: 'Included',
          benefit2: 'Included'
        },{
          name: 'Minister',
          contribution: "RM 50/Month",
          benefit1: 'Included',
          benefit2: 'Included'
        },{
          name: 'President',
          contribution: "RM 100/Month",
          benefit1: 'Included',
          benefit2: 'Included'
        }]
      };
    },
  components: {},
  async created() {},
};
</script>

<style scoped>
hr{
  margin: 25px 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
