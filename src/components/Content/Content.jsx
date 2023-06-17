import React from 'react'
// import { Typography, Divider } from '@material-ui/core';
import { Typography,Divider } from '@mui/joy'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoCau from "../../assets/img/cocau.jpg"
function Content() {
  return (
    <div>
    <Grid container columns={{ xs: 4, md: 12 }}>
    <Grid item xs={10} margin={"auto"} >
    <Typography color='danger' variant="h1">Introduction</Typography>
    <Divider />
    <br></br>
    <Typography color='danger' variant="h1">1. Introduction</Typography>
    <Typography color='danger' variant="h1">Cơ cấu tổ chức quản lý của công ty công nghệ TeraBox</Typography>
    <img src={CoCau} style={{marginLeft:"25%",width:"600px"}} alt="" />
    
    <br />
    <Typography color='danger' variant="h1">Giám đốc</Typography>
    <Typography>
    Là người đại diện pháp nhân và lãnh đạo cao nhất của chi nhánh có nhiệm vụ điều hành toàn bộ hoạt động của chi nhánh và chịu trách nhiệm sau cùng về các hoạt động của chi nhánh; xây dựng mức phát triển kinh tế kĩ thuật tiêu chuẩn và đánh giá tiền lương phù hợp với quy định của Nhà nước; đề nghị bổ miễn nhiệm, khen thưởng công nhân viên của chi nhánh.
    </Typography>
    <br></br>
    <Typography color='danger' variant="h1">Trợ lý Giám đốc</Typography>
    <Typography>
    Là người hỗ trợ cho Giám đốc (GĐ) về tất cả các công việc, có nhiệm vụ điều động hoạt động làm việc của chi nhánh thay cho GĐ, hỗ trợ về công tác đối ngoại, gặp gỡ khách hàng; là người chuyên ghi chép những hoạt động của chi nhánh, nắm được các công việc của GĐ làm trong ngày. Cùng GĐ đi gặp khách hàng hoặc thay mặt gặp khách hàng khi GĐ có việc.
    </Typography>
    <br></br>
    <Typography color='danger' variant="h1">Kinh doanh</Typography>
    <Typography>
    Nghiên cứu thị trường, lập kế hoạch về lộ trình, thời gian làm việc cụ thể cho nhân viên; quản lý những nguồn thông tin từ các bộ phận và lập báo cáo mỗi ngày cho GĐ.
    Quản lý và giải quyết những vấn đề cho KH, nhân viên Sale, PG; lập lệnh sản xuất, xuất kho cho nhà máy và kho lưu trữ; lên kế hoạch sản xuất cho tháng tiêu thụ tiếp theo và gửi trực tiếp đến nhà máy sản xuất; thực hiện chính sách khen thưởng cho nhân viên Sale, PG, đào tạo nhân viên Sale và tiếp thị.
    </Typography>
    <br></br>

    <Typography color='danger' variant="h1">Marketing</Typography>
    <Typography>
    Nghiên cứu thị trường (KH, đối thủ cạnh tranh) để xây  dựng một chiến lược kinh doanh có hiệu quả; đề xuất những chương trình khuyến mãi, chiến lược Marketing cho kế hoạch kinh doanh; quản lý và đảm bảo các hoạt động diễn ra theo đúng kế hoạch kinh doanh; kết hợp với bộ phận phát triển sản phẩm để có những kế hoạch sản xuất những quà tặng, sản phẩm mới phù hợp với nhu cầu của thị trường.
    </Typography>
    <br></br>

    <Typography color='danger' variant="h1">Kỹ thuật</Typography>
    <Typography>
    Chuyên nghiên cứu phần mềm và trang web của công ty; sửa chữa máy móc thiết bị của chi nhánh khi có sự cố.
    </Typography>
    <br></br>



    

    
    </Grid>
    </Grid>
    
  </div>
    )
}

export default Content