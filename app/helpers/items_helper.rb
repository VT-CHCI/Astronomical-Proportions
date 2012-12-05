module ItemsHelper
	def printValueAsSciNotation(value)
		logger.debug("\n\n\n\n\n\n\n\n")
		logger.debug(value)
		if(value.nil?) 
			return "0"
		else	
			return ("%.2e" % value.to_f).gsub("e+", "x10^").gsub("e-", "x10^-").gsub("^0","^").gsub("^-0","^-")
		end
	end
end
