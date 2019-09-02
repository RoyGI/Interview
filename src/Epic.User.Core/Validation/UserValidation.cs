﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright file=" UserValidation.cs" company="MCode Software">
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

namespace Epic.Identity.Core.Validation
{
    using System.Data;

    using Epic.Identity.Core.Domain;

    using FluentValidation;

    /// <summary>
    /// Class UserValidation.
    /// </summary>
    /// <seealso cref="FluentValidation.AbstractValidator{Epic.Identity.Core.Domain.User}" />
    public class UserValidation : AbstractValidator<User>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserValidation"/> class.
        /// </summary>
        public UserValidation()
        {
            this.RuleFor(c => c.Password).NotEmpty();
            this.RuleFor(c => c.Email).NotEmpty().EmailAddress();

        }
    }
}