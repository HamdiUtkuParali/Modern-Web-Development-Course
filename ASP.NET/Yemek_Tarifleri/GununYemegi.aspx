<%@ Page Title="" Language="C#" MasterPageFile="~/Kullanici.master" AutoEventWireup="true" CodeFile="GununYemegi.aspx.cs" Inherits="GununYemegi" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .auto-style4 {
            width: 100%;
        }
        .auto-style5 {
            height: 20px;
            text-align: center;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:DataList ID="DataList2" runat="server" Width="446px">
        <ItemTemplate>
            <table class="auto-style4">
                <tr>
                    <td>
                        <table class="auto-style4">
                            <tr>
                                <td class="auto-style5">
                                    <asp:Label ID="Label3" runat="server" style="font-size: x-large; font-weight: 700" Text='<%# Eval("GununYemegiAd") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Malzemeler</strong>:
                                    <asp:Label ID="Label4" runat="server" Text='<%# Eval("GununYemegiMalzeme") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Yapilis</strong>:
                                    <asp:Label ID="Label5" runat="server" Text='<%# Eval("GununYemegiTarif") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center">
                                    <asp:Image ID="Image1" runat="server" Height="130px" ImageUrl="~/Resimler/sucukluyumurta.jpeg" Width="300px" />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Puan</strong>:
                                    <asp:Label ID="Label6" runat="server" Text='<%# Eval("GununYemegiPuan") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Tarih</strong>:
                                    <asp:Label ID="Label7" runat="server" Text='<%# Eval("GununYemegiTarih") %>'></asp:Label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </ItemTemplate>
    </asp:DataList>
</asp:Content>

