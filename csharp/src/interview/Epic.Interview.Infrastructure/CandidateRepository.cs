// --------------------------------------------------------------------------------------------------------------------
// <copyright file="CandidateRepository.cs" company="MCode">
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see https://www.gnu.org/licenses/.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Epic.Interview.Infrastructure
{
    using Epic.Data.Infrastructure;
    using Epic.Interview.Core.Domain.Entities;
    using Epic.Interview.Core.Repository;

    /// <summary>
    /// Class CandidateRepository.
    /// </summary>
    /// <seealso>
    ///     <cref>Persistence.Repository{int, Candidate}</cref>
    /// </seealso>
    /// <seealso cref="ICandidateRepository" />
    public class CandidateRepository : Repository<int, Candidate>, ICandidateRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CandidateRepository"/> class.
        /// </summary>
        /// <param name="set">The set.</param>
        public CandidateRepository(IEntitySet set)
            : base(set)
        {
        }
    }
}