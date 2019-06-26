﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright file=" AntiforgeryController.cs" company="MCode Software">
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.
// </copyright>
// <summary>
//  Contributors: Roy Gonzalez
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Epic.Interview.Services.Controllers
{
    using Microsoft.AspNetCore.Antiforgery;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Class AntiforgeryController.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.Controller" />
    [Route("api/[controller]")]
    [ApiController]
    public class AntiforgeryController : Controller
    {
        /// <summary>
        /// The anti forgery.
        /// </summary>
        private IAntiforgery antiforgery;

        /// <summary>
        /// Initializes a new instance of the <see cref="AntiforgeryController"/> class.
        /// </summary>
        /// <param name="antiforgery">The anti forgery.</param>
        public AntiforgeryController(IAntiforgery antiforgery)
        {
            this.antiforgery = antiforgery;
        }

        /// <summary>
        /// Gets the token.
        /// </summary>
        /// <returns>the IActionResult.</returns>
        [HttpGet]
        [IgnoreAntiforgeryToken]
        public IActionResult GetToken()
        {
            var tokens = this.antiforgery.GetAndStoreTokens(this.HttpContext);
            return new ObjectResult(new { token = tokens.RequestToken, tokenName = tokens.HeaderName });
        }
    }
}