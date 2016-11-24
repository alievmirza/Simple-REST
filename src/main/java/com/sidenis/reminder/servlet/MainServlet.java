package com.sidenis.reminder.servlet;

import com.sidenis.reminder.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Mirza.Aliev on 11/7/2016.
 */
@WebServlet(
        name = "MainServlet",
        urlPatterns = {"/mainServlet"}
)

public class MainServlet extends HttpServlet {

    @Autowired
    private TasksService tasksService;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this, config.getServletContext());
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        List<String> res = tasksService.getTasks();
        PrintWriter pw = resp.getWriter();
        for(String str : res) {
            pw.append(str);
        }
    }

}