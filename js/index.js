$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    })

    //Kiem tra ma tour theo mau
    var txtMa = $("#txtMa");
    var tbMa = $("#tbMa");
    function kiemTraMa(){
        var regex = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if(txtMa.val() == ""){
            tbMa.html("* Bắt buộc nhập");
            return false;
        }
        if(!regex.test(txtMa.val())){
            tbMa.html("* Mã tour theo mẫu: XXX-XXX-00-0000");
            return false;
        }
        tbMa.html("*");
        return true;
    }
    txtMa.blur(kiemTraMa);

    //Kiem tra diem den
    var txtDiemDen = $("#txtDiemDen");
    var tbDiemDen = $("#tbDiemDen");
    function kiemTraDiemDen(){
        if(txtDiemDen.val() == ""){
            tbDiemDen.html("* Bắt buộc nhập");
            return false;
        }
        tbDiemDen.html("*");
        return true;
    }
    txtDiemDen.blur(kiemTraDiemDen);

    //Kiem tra ngay khoi hanh phai sau ngay hien tai
    var txtNgay = $("#txtNgay");
    var tbNgay = $("#tbNgay");
    function kiemTraNgayKH(){
        if(txtNgay.val() == ""){
            txtNgay.html("* Bắt buộc nhập");
            return false;
        }

        var day = new Date(txtNgay.val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if(day < today){
            tbNgay.html("* Ngay khoi hanh phai sau ngay hien tai 30 ngay");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(kiemTraNgayKH);

    //Kiem tra gia tour
    var txtGia = $("#txtGia");
    var tbGia = $("#tbGia");
    function kiemTraGia(){
        var gia = txtGia.val();
        if(gia == ""){
            tbGia.html("* Bắt buộc nhập");
            return false;
        }
        if(isNaN(gia)){
            tbGia.html("* Phải nhập số");
            return false;
        }
        if(eval(gia) <= 0){
            tbGia.html("* Phải nhập số > 0");
            return false;
        }
        tbGia.html("*");
        return true;
    }
    txtGia.blur(kiemTraGia);

    var i = 2;
    $("#btnSave").click(function(){
        // if(!kiemTraMa() || !kiemTraDiemDen() || !kiemTraNgayKH() || !kiemTraGia()){
        //     $("#thongbao").html("Mời bạn nhập đầy đủ thông tin");
        //     return false;
        // }

        var maTour = txtMa.val();
        var diemDen = txtDiemDen.val();
        var ngayKH = txtNgay.val();
        var TG = $("#txtTG").val();
        var gia = txtGia.val();
        var anh = $("#txtAnh").val().substring(12);
        var them = "<tr><td>" + (i++) + "</td><td>" + maTour + "</td><td>" + diemDen + "</td><td>" + ngayKH + "</td><td>" + TG + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>";
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})