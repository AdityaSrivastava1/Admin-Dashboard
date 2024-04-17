import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImg from "../assets/userpic.png"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashbaordTable"


const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
        <AdminSidebar/> 
        <main className="dashboard">
   <div className="bar">
  <BsSearch/>
  <input type="text" placeholder="Search for data , users , docs "/>
  <FaRegBell/>
  <img src={userImg} alt="User"/>
    </div>

<section className="widgetcontainer">
<WidgetItem 
percent={40} 
amount={true} 
value={340000} 
heading="Revenue" 
color="rgb(0,155,255)"
/>

<WidgetItem 
percent={-14} 
amount={false} 
value={340000} 
heading="Users" 
color="rgb(0,198,202)"
/>

<WidgetItem 
percent={80} 
amount={false} 
value={23000} 
heading="Trasactions" 
color="rgb(255,196,0)"
/>
 
<WidgetItem 
percent={30} 
amount={false} 
value={1000} 
heading="Products" 
color="rgb(76 0 255)"
/>
    </section>

  <section className="graph-container">
  <div className="revenue-chart">
    <h2>Revenue & Trasaction</h2>
        {/* Graph here */}
        <BarChart 
        data_1={[300,144,433,655,237,755,190]}
        data_2={[200,444,343,556,778,455,190]}
        title_1="Revenue"
        title_2="Trasaction"
        bgcolor_1="rgb(0,115,255)"
        bg_color2="rgba(53,162,235,0.8)"
        />
      </div>

      <div className="dashboard-categories">
        
      <h2>Inventory</h2>
      <div>
       { data.categories.map((i)=>(

<CategoryItem 
key={i.heading}
heading={i.heading}
 value={i.value} 
 color={`hsl(${i.value * 4},${i.value}%,50%)`}
 /> ))}
           
      </div>

        </div>

    </section>

    <section className="transaction-container">
      <div className="gender-chart">
        <h2>GFender Ratio</h2>
        <DoughnutChart 
        labels={["Female","Male"]}
         data={[12,19]}
        backgroundColor={["hsl(340,82%,56%)" , "rgba(53,162,235,0.8)"]}
        cutout={90}
        />
        <p>
          <BiMaleFemale/>
          </p>
      </div>
      {/* table */}
      <Table data={data.transaction}/>
      
    </section>
      </main>
    </div>
  )
};



interface WidgetItemProps{
  heading:string,
  value:number,
  percent:number,
  color:string,
  amount?:boolean,
}

const WidgetItem = ({heading,value,percent,color,amount=false}:WidgetItemProps) =><article className="widget">
<div className="widgetInfo">
  <p>{heading}</p>
  <h4>{amount ? `$${value}`:value}</h4>

  { percent > 0 ? (
    <span className="green">
    <HiTrendingUp/> +{percent}%{" "}
    </span>):(
      <span className="red">
        <HiTrendingDown/> {percent}%{""}
      </span>
    )}
</div>

<div className="widgetCircle"  
style={{
  background:
  `conic-gradient(
    ${color}  ${(Math.abs(percent)/100)*360}deg,
    rgb(255,255,255) 0 
  )`,
}}
>
  <span style={{
    color,
  }}> 
  {percent}%
  </span>
</div>

</article>

interface CategoryItemProps{
  color:string,
  value:number,
  heading:string,
}

const CategoryItem=({color,value,heading}:CategoryItemProps)=>(
  <div className="category-item">
<h5>{heading}</h5>
<div>
  <div style={{
    backgroundColor:color,
    width:`${value}%`,
  }}
 ></div>
</div>
<span>{value}%</span>

  </div>
)

export default Dashboard
