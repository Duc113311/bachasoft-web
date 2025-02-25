"use strict";

var KTRecruitmentPage = function () {
    var initData = function () {
        $.ajax({
            url: HOST_URL + "?index=admin&action=showPageRecruitment",
            type: "POST",
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (arrRecruitment) {
                console.log(arrRecruitment);
                let strData = '';
                for (const item of arrRecruitment) {
                    let id = item['id']
                    let title = item['title']
                    let date_end = item['date_end']
                    let salary = item['salary']
                    let position = item['position']
                    let level = item['level']
                    let icon = item['icon']
                    strData += '<div class="job-block col-lg-6 col-md-12 col-sm-12">\n' +
                        '                                <div class="inner-box">\n' +
                        '                                    <div class="content">\n' +
                        '                                        <span class="company-logo"><img src="'+icon+'" alt="" width="51" height="50"></span>\n' +
                        '                                        <h4><a onclick="clickRecruitmentSelected(\''+id+'\')">'+title+'</a></h4>\n' +
                        '                                        <ul class="job-info">\n' +
                        '                                            <li><span class="icon flaticon-map-locator"></span> Viễn Đông, 34 Hoàng Cầu</li>\n' +
                        '                                            <li><span class="icon flaticon-clock-3"></span> '+date_end+'</li>\n' +
                        '                                            <li><span class="icon flaticon-money"></span> '+salary+'</li>\n' +
                        '                                        </ul>\n' +
                        '                                        <ul class="job-other-info">\n' +
                        '                                            <li class="time">'+position+'</li>\n' +
                        '                                            <li class="privacy">Full Time</li>\n' +
                        '                                            <li class="required">'+level+'</li>\n' +
                        '                                        </ul>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>';
                }

                document.getElementById("list_recruitment").innerHTML = strData;


            },
            error: function (error) {
                swal("Fail", "Fail!");
            }
        });
    };

    return {

        //main function to initiate the module
        init: function () {
            initData();
        },

    };

}();

function clickRecruitmentSelected(id_recruitment) {
    location.href = HOST_URL + '?recruitment=detail&id=' + id_recruitment;
}

function test() {
    console.log('aaaaaa')
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTRecruitmentPage.init();
});