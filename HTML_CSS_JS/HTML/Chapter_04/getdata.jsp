<%@ page language="java" contenttype="text/html; charset=utf-8" pageencoding="utf-8" %>
    <!doctype html public "-//w3c//dtd html 4.01 transitional//en" "http://www.w3.org/tr/html4/loose.dtd">
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get 방식요청</title>
    </head>

    <body>
        <!-- JSP 문법 -->
        <% 
        
        string strname=request.getparameter("name"); 
        string strmajor=request.getparameter("major"); 
        
        out.println("이름 : " +strname+" <br />"); 
        out.println("학과 : " +strmajor+"        <hr />");

        %>

    </body>

    </html>