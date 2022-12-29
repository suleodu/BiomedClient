<template>
    <div>
        <div class="container py-5">
            <div id="basketContent">
                <div class="mfp-close" type="button" title="Close (Esc)">X</div>
                <div class="success-msg" style="display: none;" id="success_message"></div>
                <div class="error-msg" style="display: none;" id="error_message"></div>
                <div class="block-title popup mb-2">
                    <h2 style="font-size:23px;">Add products by reference</h2>
                </div>
                <form id="cart_grid_form" method="post">
                    <table class="table table-bordered" id="order_details">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Reference</th>
                                <th>Quantity</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in rows" :key="row.id">
                                <td>
                                    <span id="snum1" class="indexnum">{{ row.id }}</span>
                                </td>
                                <td><input id="partnumber_1" class="form-control" type="text" name="partnumber[]"
                                        data-type="partnumber" autocomplete="off"></td>
                                <td><input type="number" class="form-control"></td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="50">
                                    <button class="btn primary-btn mr-3" @click.prevent="addLine">Add Line</button>
                                    <button class="btn site-btn">Add To Cart</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>

                <div class="mt-5">
                    <h2 style="font-size:23px;">Add products from a CSV file</h2>
                </div>
                <div class="add-to-cart-from-csv">
                    <div style="color:red; font-family:'Rubik'">Select a CSV file that contains the references and
                        quantities to add to the cart. Download an example file.<a
                            href="https://www.humeau.com/media/quickorder/commande_express.csv"
                            title="Téléchargez un fichier CSV exemple" download=""><img
                                src="https://www.humeau.com/skin/frontend/722z/humeau2/images/quickorder/download.png"
                                alt="Téléchargez un fichier CSV exemple" width="22" height="22"></a></div>

                    <form action="" class="mt-3">
                        <div class="form-group">
                            <input type="file" name="" id="">
                        </div>
                        <button class="btn site-btn">Upload To Cart</button>

                    </form>

                </div>


            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rows: [
                { id: 1, reference: 'Value 1', quantity: 'Value 2' },
            ]
        }
    },
    methods: {
        addLine() {
            // Generate a new unique ID for the new row
            const newId = Math.max(...this.rows.map(row => row.id)) + 1;
            // Add a new row to the rows array
            this.rows.push({
                id: newId,
                column1: '',
                column2: ''
            });
        }
    }
}
</script>