<template>
    <div>
        <div>
            <h2>Company</h2>
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
                                <router-link to="/company/meet-the-team">Meet The Team</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>
<style>
    .wtu:hover {
    background-color: #f5f5f5 !important;
    color: black !important;
    transition: 1s;
    cursor: pointer;
}
a:hover {
    color: black !important;
    transition: 1s;
}
</style>