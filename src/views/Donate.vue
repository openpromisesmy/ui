<template>
  <div class="container">
    <template>
      <el-row>
        <el-col :md="12">
          <p>
            Monthly Expenses - RM 180 / month
          </p>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <p>
            Full-Time Tracker and Tools - RM 2020 / month
          </p>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="18">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Support us to track the issues you care about!" name="1">
              <div>When you contribute to Open Promises, you support the sustainability of the project. Since the beginning, Open Promises has been independently holding those in power accountable. By contributing, you will help us retain our independence and invest in resources to provide more frequent promise updates.</div>
            </el-collapse-item>
            <el-collapse-item title="Who are we currently funded by?" name="2">
              <div>Currently, we are 100% citizen-funded through Patreon. Decentralised funding means we cannot be easily influenced or corrupted.</div>
            </el-collapse-item>
            <el-collapse-item title="What are our current expenses?" name="3">
              <div>
                <ul>
                  <li>Web hosting and domain (30.00 USD/month) - already covered by crowdfunders</li>
                  <li>Paid media subscriptions (RM 62.00/month) - already covered by crowdfunders</li>
                  <li>The Malaysian Insight monthly subscription (paid annually) - RM 12.00</li>
                  <li>MalaysiaKini monthly subscription (paid annually) - RM 40.00</li>
                  <li>The Edge monthly subscription (paid annually) - RM 12.00</li>
                </ul>
              </div>
            </el-collapse-item>
            <el-collapse-item title="What would we use funding for?" name="4">
              <div>
                Tracking promises is a time consuming process. Our team of trackers consists of volunteers - while we strive to ensure consistency, work and study commitments may mean delays in processing updates. By hiring a full-time tracker, we can
                <b>manage the tracking process quicker and increase the frequency of updates.</b>
              </div>
              <div>In addition, developing new website features and tracking tools will be accelerated with proper funding. We also need funding to get access to paid media sources which will help us verify promises faster. Here is a list of the uses of funds:</div>
              <ul>
                <li>Hiring a full-time tracker - RM 1,800 / month</li>
                <li>Full text search capabilities - 29 USD / month</li>
                <li>Security tools - 25 USD / month (there are certain security tools that we can use to ensure the platform is more secure against attacks)</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="How can you fund us?" name="5">
              <div>We accept contributions via bank transfer, credit/debit cards and PayPal. You may contribute monthly and join as a member, or you may also opt to make a one-off contribution.</div>
              <div>By contributing monthly, you will receive exclusive benefits (see schedule below). Who doesn’t like goodies?</div>
              <div>
                <table>
                  <tr>
                    <th>Bank</th>
                    <th>CIMB</th>
                  </tr>
                  <tr>
                    <td>Swift -BIC</td>
                    <td>xxx</td>
                  </tr>
                  <tr>
                    <td>Beneficiary</td>
                    <td>OPENPROMISES PLT</td>
                  </tr>
                  <tr>
                    <td>Account</td>
                    <td>xxx</td>
                  </tr>
                </table>
              </div>
            </el-collapse-item>
            <el-collapse-item title="Benefits of contributing as a member" name="6">
              <table>
                <tr>
                  <th>Councillor</th>
                  <th>RM 10/month</th>
                  <th rowspan="4">
                    Exclusive updates, reports
                    <br />
                    <br />
                    <br />Open Promises merchandise (T-Shirts, stickers)
                  </th>
                </tr>
                <tr>
                  <td>Assemblyman</td>
                  <td>RM 30/month</td>
                </tr>
                <tr>
                  <td>Minister</td>
                  <td>RM 50/month</td>
                </tr>
                <tr>
                  <td>President</td>
                  <td>RM 100/month</td>
                </tr>
              </table>
            </el-collapse-item>
             <el-collapse-item title="Have any questions? " name="7">
              <div>
                If you need a payment receipt, or if you have any questions, feel free to reach out to us at xxx@openpromises.com.
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col :md="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Support us to track the issues you care about</span>
            </div>
            <div class="text item">
              <el-form ref="form" :model="form" label-width="180px">
                <el-form-item label="Amount">
                  <el-select v-model="form.region" placeholder="Amount">
                    <el-option label="RM 10" value="shanghai"></el-option>
                    <el-option label="RM 30" value="beijing"></el-option>
                    <el-option label="RM 50" value="beijing"></el-option>
                    <el-option label="RM 100" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Other Amount">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Monthly Recurring">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
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
      activeName: "1",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  components: {},
  async created() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
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
