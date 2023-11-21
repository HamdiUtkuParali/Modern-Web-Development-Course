<%@ Page Title="" Language="C#" MasterPageFile="~/Kullanici.master" AutoEventWireup="true" CodeFile="TarifOner.aspx.cs" Inherits="TarifOner" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .auto-style4 {
            width: 100%;
        }
        .auto-style5 {
            text-align: right;
            font-weight: bold;
            width: 130px;
        }
        .auto-style6 {
            width: 130px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="auto-style4">
        <tr>
            <td class="auto-style6">&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td class="auto-style5">Tarif Ad:</td>
            <td>
                <asp:TextBox ID="tbx_TarifAd" runat="server" Width="250px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="auto-style5">Malzemeler:</td>
            <td>
                <asp:TextBox ID="tbx_TarifMalzeme" runat="server" Height="80px" TextMode="MultiLine" Width="250px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="auto-style5">Yapilis:</td>
            <td>
                <asp:TextBox ID="tbx_TarifYapilis" runat="server" Height="150px" TextMode="MultiLine" Width="250px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="auto-style5">Resim:</td>
            <td>
                <asp:FileUpload ID="fu_TarifResim" runat="server" Width="250px" />
            </td>
        </tr>
        <tr>
            <td class="auto-style5">Tarifi Oneren:</td>
            <td>
                <asp:TextBox ID="tbx_TarifSahip" runat="server" Width="250px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="auto-style5">Mail Adresi:</td>
            <td>
                <asp:TextBox ID="tbx_TarifSahipMail" runat="server" TextMode="Email" Width="250px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="auto-style6">&nbsp;</td>
            <td>
                <asp:Button ID="Button1" runat="server" style="font-weight: 700; font-style: italic; background-color: #4F569B" Text="Onay" Width="100px" OnClick="Button1_Click" />
            </td>
        </tr>
    </table>
</asp:Content>

