﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Calculator.Controllers
{
	public class CalculatorController : Controller
	{
		// GET: Calculator
		public ActionResult Index()
		{
			return View();
		}

		public JsonResult Evaluate(float first, float second, string oper)
		{
			float result = 0;
			switch (oper)
			{
				case "+":
					result = first + second;
					break;
				case "-":
					result = first - second;
					break;
				case "*":
					result = first * second;
					break;
				case "/":
					result = first / second;
					break;
			}

			return Json(result);
		}
	}
}