<template>
    <div>
        <div>
            <h2>Product Category</h2>
            <div class="catSub">
                <ul id="myUL">
                    <li>
                        <ul class="nesteds">
                            <li class="wtu">
                                <router-link to="/company">Company</router-link>
                            </li>
                            <li class="wtu">
                                <router-link to="/company/mission-vision-value">Mission, Vision & Values</router-link>
                            </li>
                            <li class="wtu">
                                <router-link to="/company/history">History</router-link>
                            </li>
                            <li class="wtu">
                                <router-link to="/company">Meet The Team</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>