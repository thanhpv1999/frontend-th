import React from "react";

const Mchitiet = (props) =>{
    <div>
        <div className="z-20 absolute left-[0px] top-[0px] w-full h-screen bg-[#42526E] opacity-[40%]"></div>
        <div className="z-20 absolute flex flex-col space-y-4 left-[15%] top-[20%] w-[70%] h-[300px] bg-[#FFFFFF] p-6">
            <div>Thêm thành viên</div>
            <hr className="w-full"></hr>
            <div className="flex flex-row justify-between items-center w-[50%]">
                <div> <input type="radio" name="addmember" value="0" /> Quản lý </div>
                <div> <input type="radio" name="addmember" value="1" /> Giảng viên </div>
                <div> <input type="radio" name="addmember" value="2" /> Sinh viên </div>
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-row space-x-2">
                <input type="button" value="Hủy" className="rounded-md text-center bg-[#1890FF] h-[25px] w-[60px] text-[#ffffff] hover:bg-red-700"></input>
            </div>
        </div>
    </div>
}

export default Mchitiet;