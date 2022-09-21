<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4>Account Overview</h4>
            </div>
            <div class="card-body">
              <!-- Modal -->
              <div
                class="modal fade"
                id="addressModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Create Address
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <vue-element-loading
                          :active="loading"
                          color="#FF6700"
                          :text="loadingText"
                          spinner="bar-fade-scale"
                        />
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="email"
                            class="form-control"
                            v-model="address.email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            v-model="address.phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <select
                            name=""
                            class="form-control"
                            v-model="address.country"
                            id=""
                          >
                            <option value="">--Select Country--</option>
                            <option
                              :value="c.name"
                              v-for="(c, i) in countries"
                              :key="i"
                            >
                              {{ c.name }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.state"
                            placeholder="State"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.city"
                            placeholder="City"
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Address"
                            v-model="address.address"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="saveAddress"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <table class="table table-bordered">
                    <tr>
                      <th>ACCOUNT DETAILS</th>
                    </tr>
                  </table>
                </div>
                <div class="col-md-6">
                  <table class="table table-bordered">
                    <vue-element-loading
                          :active="loading"
                          color="#FF6700"
                          :text="loadingText"
                          spinner="bar-fade-scale"
                        />
                    <tr>
                      <th>
                        ADDRESS BOOK
                        <button
                          type="button"
                          class="btn btn-primary float-right btn-sm"
                          data-toggle="modal"
                          data-target="#addressModal"
                        >
                          Add New Address
                        </button>
                      </th>
                      
                    </tr>
                    <tr>
                      <th>
                       <p>
                        Your default shipping address:
                       </p>
                        
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import { useToast } from "vue-toastification";
import $ from 'jquery'
export default {
  data() {
    return {
      address: {
        country: "",
      },
      myaddresses:{},
      loading:false,
      loadingText: "",
      countries: {},
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  components: { VueElementLoading },
  methods: {
    getCountries() {
      this.$api.get("../Countries.json").then((response) => {
        this.countries = response.data;
      });
    },
    saveAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/user-address`, this.address)
        .then((res) => {
          this.toast.success(res.data.message);
          $('#addressModal').modal().hide();
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
     getAllAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/user-address`)
        .then((res) => {
          this.myaddresses = res.data.data
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
  },
  mounted() {
    this.getCountries();
    this.getAllAddress();
  },
};
</script>