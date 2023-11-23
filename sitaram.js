let mychart=document.getElementById("myChart").getContext('2d');
    console.log("obj:", obj);
    postData('https://stockopedia.herokuapp.com/', obj)
        .then(data => {
            if (id_val=="0"){
                $('#pred_sbi').html(data['ans'])
                $('#pred_sun').html(null)
                $('#pred_ts').html(null)
                $('#pred_tcs').html(null)
                let chart = new Chart(mychart,{
                    type: 'line',
                    data:{
                        labels:data['date'],
                        datasets:[{
                            label:'close of sbi',
                            data:data['close'],
                            backgroundColor: 'rgba(173, 38, 38, 0.58)',
                            borderColor : 'red'
                        }]
                    },
                    option:{}
                });
            }
            else if (id_val=="1"){
                $('#pred_sun').html(data['ans'])
                $('#pred_sbi').html(null)
                $('#pred_ts').html(null)
                $('#pred_tcs').html(null)
                let chart = new Chart(mychart,{
                    type: 'line',
                    data:{
                        labels:data['date'],
                        datasets:[{
                            label:'close of sunpharma',
                            data:data['close'],
                            backgroundColor: 'rgba(173, 38, 38, 0.58)',
                            borderColor : 'red'
                        }]
                    },
                    option:{}
                });
            }
            else if (id_val=="2"){
                $('#pred_sbi').html(null)
                $('#pred_sun').html(null)
                $('#pred_ts').html(data['ans'])
                $('#pred_tcs').html(null)
                let chart = new Chart(mychart,{
                    type: 'line',
                    data:{
                        labels:data['date'],
                        datasets:[{
                            label:'close of tata steel',
                            data:data['close'],
                            backgroundColor: 'rgba(173, 38, 38, 0.58)',
                            borderColor : 'red'
                        }]
                    },
                    option:{}
                });
            }
            else {
                $('#pred_sbi').html(null)
                $('#pred_sun').html(null)
                $('#pred_ts').html(null)
                $('#pred_tcs').html(data['ans'])
                let chart = new Chart(mychart,{
                    type: 'line',
                    data:{
                        labels:data['date'],
                        datasets:[{
                            label:'close of tcs',
                            data:data['close'],
                            backgroundColor: 'rgba(173, 38, 38, 0.58)',
                            borderColor : 'red'
                        }]
                    },
                    option:{}
                });
            }
            //console.log(data);
        });
    }
