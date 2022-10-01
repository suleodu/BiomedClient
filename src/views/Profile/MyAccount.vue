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

              <div
                class="modal fade"
                id="editAddressModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit Address
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
                            v-model="edit.name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="email"
                            class="form-control"
                            v-model="edit.email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            v-model="edit.phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <select
                            name=""
                            class="form-control"
                            v-model="edit.country"
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
                            v-model="edit.state"
                            placeholder="State"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="edit.city"
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
                            v-model="edit.address"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="updateAddress"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <table class="table table-bordered">
                    <tr>
                      <th>ACCOUNT DETAILS</th>
                    </tr>
                  </table>
                </div>
                <div class="col-md-8">
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
                        <div
                          v-for="(a, i) in myaddresses"
                          style="font-weight: normal"
                          class="pb-3"
                          :key="i"
                        >
                          <div class="row">
                            <div class="col-md-7">
                              {{ a.name }}
                              <i
                                class="badge badge-primary"
                                v-if="a.is_default == 'yes'"
                                >Default</i
                              >
                              <br />
                              {{ a.address }} <br />
                              {{ a.city + " " + a.state }} <br />
                              {{ a.phone }}
                            </div>
                            <div class="col-md-5">
                              <button
                                class="btn btn-warning mr-2"
                                data-toggle="modal"
                                data-target="#editAddressModal"
                                @click="this.edit = a"
                              >
                                Edit
                              </button>
                              <button
                                class="btn btn-danger mr-2"
                                @click="deleteAddress(a)"
                              >
                                Delete
                              </button>
                              <button
                                class="btn btn-info"
                                v-if="a.is_default !== 'yes'"
                                @click="makeDefault(a)"
                              >
                                Make Default
                              </button>
                            </div>
                          </div>
                        </div>
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
import swal from "sweetalert";
import $ from "jquery";
export default {
  data() {
    return {
      address: {
        country: "",
      },
      edit: {},
      myaddresses: {},
      loading: false,
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
        .post(
          `https://biomed-backend.herokuapp.com/api/user-address`,
          this.address
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          this.getAllAddress();
          $("#addressModal").modal('hide');
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

    updateAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .patch(
          `https://biomed-backend.herokuapp.com/api/user-address/${this.edit.id}`,
          this.edit
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          $("#editAddressModal").modal().hide();
          this.getAllAddress();
        })
        // .catch(this.$toast.error("An Errror Occured"))
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
          this.myaddresses = res.data.data;
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
    makeDefault(data) {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .patch(
          `https://biomed-backend.herokuapp.com/api/user-address/make-default/${data.id}`
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          this.getAllAddress();
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
    deleteAddress(data) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Address Details!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.loading = true;
          this.loadingText = "Please wait...";
          this.$api
            .get(
              `https://biomed-backend.herokuapp.com/api/user-address/remove/${data.id}`
            )
            .then((res) => {
              this.$toast.success(res.data.message);
              this.getAllAddress();
            })
            .catch((err) => {
              console.log(err.response);
            })
            .finally((res) => {
              this.loading = false;
              this.loadingText = "";
              console.log(res);
            });
        } 
      });
    },
  },
  mounted() {
    this.getCountries();
    this.getAllAddress();
  },
};
</script>