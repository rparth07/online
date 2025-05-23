/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4; fill-column: 100 -*- */
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

#include <config.h>

#include "Unit.hpp"

UnitBase** UnitBase::linkAndCreateUnit([[maybe_unused]] UnitType type,
                                       [[maybe_unused]] const std::string& unitLibPath)
{
  return nullptr;
}

void UnitBase::closeUnit()
{
}

/* vim:set shiftwidth=4 softtabstop=4 expandtab: */
