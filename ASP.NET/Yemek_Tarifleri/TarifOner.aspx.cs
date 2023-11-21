using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class TarifOner : System.Web.UI.Page
{
    sqlsinif bgl = new sqlsinif();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        SqlCommand komut = new SqlCommand("insert into Tbl_Tarifler(TarifAd,TarifMalzeme,TarifYapilis,TarifResim,TarifSahip,TarifSahipMail) values (@t1,@t2,@t3,@t4,@t5,@t6)", bgl.baglanti());
        komut.Parameters.AddWithValue("@t1", tbx_TarifAd.Text);
        komut.Parameters.AddWithValue("@t2", tbx_TarifMalzeme.Text);
        komut.Parameters.AddWithValue("@t3", tbx_TarifYapilis.Text);
        komut.Parameters.AddWithValue("@t4", fu_TarifResim.FileName);
        komut.Parameters.AddWithValue("@t5", tbx_TarifSahip.Text);
        komut.Parameters.AddWithValue("@t6", tbx_TarifSahipMail.Text);
        komut.ExecuteNonQuery();
        bgl.baglanti().Close();
        Response.Write("Tarifiniz Alınmıştır");
    }
}